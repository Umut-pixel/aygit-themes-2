export const smoothScrollTo = (target: string | number, duration: number = 1000) => {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : null;
  const targetPosition = typeof target === 'number' ? target : (targetElement as HTMLElement)?.offsetTop || 0;
  
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

// Easing function for smooth animation
const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

// Scroll to top with custom duration
export const scrollToTop = (duration: number = 1000) => {
  smoothScrollTo(0, duration);
};

// Scroll to element with custom duration
export const scrollToElement = (selector: string, duration: number = 1000) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = (element as HTMLElement).offsetTop - 80; // Header height offset
    smoothScrollTo(elementPosition, duration);
  }
};
