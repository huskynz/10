interface TurnstileWindow extends Window {
  turnstile: {
    render: (container: string | HTMLElement, options: any) => string;
    reset: (widgetId?: string) => void;
  };
}

const domainMessages: Record<string, string> = {
  'husky.nz': 'Woof! Always great to hear from a fellow Husky! 🐕',
  'inde.nz': 'Why Hello there! Always awesome to see someone from Inde! 🚀',
  'rollestoncollege.nz': 'Hello what are you doing here? Testing out my form I see 🤔',
};

const specificEmailMessages: Record<string, string> = {
  'peter@husky.nz': 'Hey, this is your own contact form silly! 😄',
  'mike.blair@inde.nz': 'Hi Mike! Nice to see you checking out my site! 👋',
  'royden@inde.nz': 'Hey Royden! Thanks for checking out my site! 👋',
  'preston.gallwas@inde.nz': 'Hey Preston! Thanks for checking out my site! 👋',
};

const nameMessages: Record<string, string> = {
  'peter': 'Hey, that\'s my name too! 😄',
  'mike': 'Mike! Is that really you? 🤔',
  'royden': 'The legend himself! 🚀',
  'preston': 'Preston in the house! 💻',
  'bob': 'Bob the builder, can we fix it? Yes we can! 🏗️',
  'alice': 'Following any white rabbits lately? 🐰',
};


function resetEmailMessage(emailMessage: HTMLDivElement): void {
  emailMessage.textContent = '';
  emailMessage.classList.add('hidden');
  emailMessage.classList.remove('text-blue-500', 'dark:text-blue-400');
}

export function initializeContactForm(turnsiteSiteKey: string): void {
  const form = document.getElementById('contactForm') as HTMLFormElement;
  const statusDiv = document.getElementById('formStatus') as HTMLDivElement;
  const statusText = statusDiv.querySelector('p') as HTMLParagraphElement;
  
// Initialize form elements
const textarea = document.getElementById('message') as HTMLTextAreaElement;
const charCount = document.getElementById('charCount') as HTMLDivElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailMessage = document.getElementById('emailMessage') as HTMLDivElement;
const nameMessage = document.getElementById('nameMessage') as HTMLDivElement;

// Email check
emailInput?.addEventListener('input', () => {
  const email = emailInput.value.toLowerCase();
  const domain = email.split('@')[1];
  
  if (specificEmailMessages[email]) {
    emailMessage.textContent = specificEmailMessages[email];
    emailMessage.classList.remove('hidden');
    emailMessage.classList.add('text-grey-500', 'dark:text-grey-400');
  } else if (domain && domainMessages[domain]) {
    emailMessage.textContent = domainMessages[domain];
    emailMessage.classList.remove('hidden');
    emailMessage.classList.add('text-grey-500', 'dark:text-grey-400');
  } else {
    emailMessage.classList.add('hidden');
  }
});

// Name check
nameInput?.addEventListener('input', () => {
  const name = nameInput.value.toLowerCase().trim();
  
  if (name === '') {
    nameMessage.classList.add('hidden');
  } else if (nameMessages[name]) {
    nameMessage.textContent = nameMessages[name];
    nameMessage.classList.remove('hidden');
    nameMessage.classList.add('text-grey-500', 'dark:text-grey-400');
  } else {
    nameMessage.classList.add('hidden');
  }
});

// Reset function
function resetEmailMessage(): void {
  emailMessage.textContent = '';
  emailMessage.classList.add('hidden');
  nameMessage.textContent = '';
  nameMessage.classList.add('hidden');
}

// Reset all form fields on page load
if (textarea && emailInput && nameInput) {
  textarea.value = '';
  emailInput.value = '';
  nameInput.value = '';
  resetEmailMessage();
  
  if (charCount) {
    charCount.textContent = '500 characters remaining';
    charCount.className = 'text-sm text-gray-500 dark:text-gray-400 mt-1';
  }
}
  // Form submission
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
        statusText.textContent = 'Email sent successfully, thank you I will get back to you shortly';
        statusText.className = 'text-sm text-green-600 dark:text-green-400';
        form.reset();
        resetEmailMessage();
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