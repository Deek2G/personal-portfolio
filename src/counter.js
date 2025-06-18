// Simple counter module for demo purposes
export function setupCounter(element) {
  let count = 0;
  const update = () => {
    element.innerText = `Count: ${count}`;
  };
  element.addEventListener('click', () => {
    count++;
    update();
  });
  update();
}
