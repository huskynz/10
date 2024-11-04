export function adjustContributions() {
    const container = document.getElementById('contributionContainer');
    const grid = document.getElementById('contributionsGrid');
    const weeks = document.getElementsByClassName('contribution-week');
    
    if (!container || !grid || !weeks.length) return;

    const containerWidth = container.offsetWidth;
    const weekWidth = (weeks[0] as HTMLElement).offsetWidth + 3; // Include gap
    const visibleWeeks = Math.floor(containerWidth / weekWidth);
    
    Array.from(weeks).forEach((week, index) => {
      const htmlWeek = week as HTMLElement;
      if (index >= weeks.length - visibleWeeks) {
        htmlWeek.style.display = 'flex';
      } else {
        htmlWeek.style.display = 'none';
      }
    });
  }

  // Run on load and resize
  window.addEventListener('load', adjustContributions);
  window.addEventListener('resize', adjustContributions);
