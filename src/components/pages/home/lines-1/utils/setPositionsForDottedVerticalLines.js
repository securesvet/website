export default function setPositionsForDottedVerticalLines() {
  const dottedVerticalLine1 = document.querySelector('#lines-1-dotted-vertical-line-1');
  const dottedVerticalLine2 = document.querySelector('#lines-1-dotted-vertical-line-2');
  const dottedVerticalLine3 = document.querySelector('#lines-1-dotted-vertical-line-3');

  const verticalLine2 = document.querySelector('#lines-1-vertical-line-2');
  const verticalLine4 = document.querySelector('#lines-1-vertical-line-4');
  const verticalLine9 = document.querySelector('#lines-1-vertical-line-9');
  const circle1 = document.querySelector('#lines-1-circle-1');
  const circle2 = document.querySelector('#lines-1-circle-2');
  const circle3 = document.querySelector('#lines-1-circle-3');
  const circle4 = document.querySelector('#lines-1-circle-4');
  const circle6 = document.querySelector('#lines-1-circle-6');

  dottedVerticalLine1.style.cssText = `
    top: ${circle1.getBoundingClientRect().bottom + document.documentElement.scrollTop}px;
    left: ${verticalLine4.getBoundingClientRect().left}px;
    height: ${circle4.getBoundingClientRect().top - circle1.getBoundingClientRect().bottom}px;
  `;

  dottedVerticalLine2.style.cssText = `
    top: ${circle2.getBoundingClientRect().bottom + document.documentElement.scrollTop}px;
    left: ${verticalLine2.getBoundingClientRect().left}px;
    height: ${circle3.getBoundingClientRect().top - circle2.getBoundingClientRect().bottom}px;
  `;

  dottedVerticalLine3.style.cssText = `
    top: ${circle6.getBoundingClientRect().bottom + document.documentElement.scrollTop}px;
    left: ${verticalLine9.getBoundingClientRect().left}px;
    height: 200vh;
  `;
}
