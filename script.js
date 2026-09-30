const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  const citation = document.getElementById('bibtex');
  try {
    await navigator.clipboard.writeText(citation.textContent);
    status.textContent = 'BibTeX copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C (or Command+C) to copy.';
  }
});
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.toc a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        for (const link of links) link.classList.toggle('active', link.hash === '#' + entry.target.id);
      }
    }
  }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
