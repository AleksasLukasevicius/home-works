// 9pratymas

document.body.addEventListener('click', () => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
      document.getElementById('output').innerText = 'Neklausote manęs';
    }
  });