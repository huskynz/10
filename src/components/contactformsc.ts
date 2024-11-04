interface TurnstileWindow extends Window {
    turnstile: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
    };
  }
  
  export function initializeContactForm(turnsiteSiteKey: string): void {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const statusDiv = document.getElementById('formStatus') as HTMLDivElement;
    const statusText = statusDiv.querySelector('p') as HTMLParagraphElement;
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const turnstileResponse = document.querySelector<HTMLInputElement>('[name="cf-turnstile-response"]')?.value;
      
      if (!turnstileResponse) {
        statusDiv.classList.remove('hidden');
        statusText.textContent = 'Please complete the captcha';
        statusText.className = 'text-sm text-red-600 dark:text-red-400';
        return;
      }
  
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
  
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        turnstileToken: turnstileResponse
      };
  
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          statusDiv.classList.remove('hidden');
          statusText.textContent = 'Message sent successfully!';
          statusText.className = 'text-sm text-green-600 dark:text-green-400';
          form.reset();
          ((window as unknown) as TurnstileWindow).turnstile.reset();
        } else {
          throw new Error(result.error || 'Failed to send message');
        }
      } catch (error) {
        statusDiv.classList.remove('hidden');
        statusText.textContent = error instanceof Error ? error.message : 'Failed to send message';
        statusText.className = 'text-sm text-red-600 dark:text-red-400';
      } finally {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }