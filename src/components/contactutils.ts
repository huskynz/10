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

function updateCharacterCount(textarea: HTMLTextAreaElement, charCount: HTMLElement): void {
  const MAX_LENGTH = 500;
  const WARNING_THRESHOLD = 200;
  const CRITICAL_THRESHOLD = 50;
  const remaining = MAX_LENGTH - textarea.value.length;
  
  // Update counter text and message
  if (remaining <= 0) {
    charCount.innerHTML = `
      <div class="text-l mt-1 text-red-500 dark:text-red-400">
        You have run out of characters, please try and keep it short and sweet!!!!
      </div>
    `;
  } else {
    charCount.innerHTML = `<span>${remaining} characters remaining</span>`;
  }

  charCount.classList.remove(
    'text-gray-500', 'dark:text-gray-400',
    'text-yellow-500', 'dark:text-yellow-400',
    'text-red-500', 'dark:text-red-400'
  );

  if (remaining < 0) {
    charCount.classList.add('text-red-500', 'dark:text-red-400');
  } else if (remaining <= CRITICAL_THRESHOLD) {
    charCount.classList.add('text-red-500', 'dark:text-red-400');
  } else if (remaining <= WARNING_THRESHOLD) {
    charCount.classList.add('text-yellow-500', 'dark:text-yellow-400');
  } else {
    charCount.classList.add('text-gray-500', 'dark:text-gray-400');
  }
}

export function initializeContactForm(turnsiteSiteKey: string): void {
  const form = document.getElementById('contactForm') as HTMLFormElement;
  const statusDiv = document.getElementById('formStatus') as HTMLDivElement;
  const statusText = statusDiv.querySelector('p') as HTMLParagraphElement;
  const textarea = document.getElementById('message') as HTMLTextAreaElement;
  const charCount = document.getElementById('charCount') as HTMLElement;
  const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
  const emailMessage = document.getElementById('emailMessage') as HTMLDivElement;
  const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;

  let turnstileWidget: string;

  // Reset form on page load/refresh
  window.addEventListener('load', () => {
    form.reset();
    resetEmailMessage(emailMessage);
    updateCharacterCount(textarea, charCount);
    statusDiv.classList.add('hidden');
  });

  // Initialize character counter
  textarea.addEventListener('input', () => updateCharacterCount(textarea, charCount));
  updateCharacterCount(textarea, charCount);

  // Email validation and custom messages
  emailInput.addEventListener('input', () => {
    const email = emailInput.value.toLowerCase();
    resetEmailMessage(emailMessage);

    if (specificEmailMessages[email]) {
      emailMessage.textContent = specificEmailMessages[email];
      emailMessage.classList.remove('hidden');
      emailMessage.classList.add('text-blue-500', 'dark:text-blue-400');
      return;
    }

    const domain = email.split('@')[1];
    if (domain && domainMessages[domain]) {
      emailMessage.textContent = domainMessages[domain];
      emailMessage.classList.remove('hidden');
      emailMessage.classList.add('text-blue-500', 'dark:text-blue-400');
    }
  });

  // Name validation and custom messages
  nameInput.addEventListener('input', () => {
    const name = nameInput.value.toLowerCase();
    if (nameMessages[name]) {
      emailMessage.textContent = nameMessages[name];
      emailMessage.classList.remove('hidden');
      emailMessage.classList.add('text-blue-500', 'dark:text-blue-400');
    } else {
      resetEmailMessage(emailMessage);
    }
  });

  // Initialize Turnstile
  turnstileWidget = (window as unknown as TurnstileWindow).turnstile.render(
    '#turnstile-widget',
    {
      sitekey: turnsiteSiteKey,
      theme: 'auto',
    }
  );

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        statusDiv.classList.remove('hidden');
        statusText.textContent = 'Message sent successfully!';
        statusText.classList.add('text-green-500');
        form.reset();
        (window as unknown as TurnstileWindow).turnstile.reset(turnstileWidget);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      statusDiv.classList.remove('hidden');
      statusText.textContent = error instanceof Error ? error.message : 'An error occurred';
      statusText.classList.add('text-red-500');
    }
  });
}