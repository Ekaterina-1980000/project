document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const loaderText = preloader.querySelector('.preloader__text');
  const word = 'Загрузка';
  let idx = 0;

  const letterInterval = setInterval(() => {
    loaderText.textContent += word[idx++];
    if (idx >= word.length) {
      clearInterval(letterInterval);
      setTimeout(() => {
        document.body.classList.add('loaded');
      }, 100);
    }
  }, 100);

  window.addEventListener('load', () => {
    setTimeout(() => document.body.classList.add('loaded'), 5000);
  });

  const menuItems = [
    { href: '#courses', text: 'Курсы' },
    { href: '#about', text: 'О школе' },
    { href: '#teachers', text: 'Преподаватели' },
    { href: '#popular-subjects', text: 'Статистика' },
    { href: '#why-us', text: 'Почему мы?' },
    { href: '#contact', text: 'Контакты' }
  ];
  const menuList = document.querySelector('.header__nav-list');
  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('header__nav-item');
    const a = document.createElement('a');
    a.classList.add('header__nav-link');
    a.href = item.href;
    a.textContent = item.text;
    li.append(a);
    menuList.append(li);
  });

  const loginBtn = document.querySelector('.header__button--login');
  const signupBtn = document.querySelector('.header__button--signup');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const closeBtns = document.querySelectorAll('[data-close]');

  function openModal(modal) { modal.classList.add('modal--active'); }
  function closeModals() {
    loginModal.classList.remove('modal--active');
    signupModal.classList.remove('modal--active');
  }

  // Ссылка на блок-схему алгоритма: 
  //https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=BS.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%20%E2%80%94%201%22%20id%3D%22J5csYhee9oL-4B0zf4vv%22%3E1Zpfk5s2EMA%2FjWcuD74BCQQ8Gv9J0sm1nbmHtk8dxVZsEowcLJ%2FtfvoKkGBlsCNnekd5kdEiIWnZ3%2B5KeISn29P7nO42T3zF0hFyVqcRno0QchEi8qeQnCsJIW4lWOfJSjVqBM%2FJP0wJHSU9JCu2NxoKzlOR7EzhkmcZWwpDRvOcH81mX3hqjrqja9YSPC9p2pb%2BkazEppKGKGjkH1iy3uiRXRJVd7ZUN1Yr2W%2Foih%2BBCM9HeJpzLqqr7WnK0kJ5Wi9Vv8WVu%2FXEcpYJmw7Hj3iSfd%2F%2Fnv3yN54k%2B4n3bfzr2FNzE2e9YLaS61dVnosNX%2FOMpvNGGuf8kK1Y8VRH1po2nzjfSaErhV%2BZEGf1MulBcCnaiG2q7lZjFgNdXYoS7fkhX7Ib89cmQfM1EzfaoVrh0lIZ3zKRn2W%2FnKVUJC%2FmPKgymXXdrtGqvFCKvUPJ6rkvND2okUZSddGsKGNnJHUSBvpalnFZzttvJk2l1Rdv4LhJBHve0VI1Rwlel35fWC7Y6baG2xpRHTBWVns2cTw2DLjasDfA%2FkPnlXToD9xQkaWh4j4NFXUb6rw0SFKWYVl6wFz9spQDVpbsKustSreUxGWJQHe%2FaIxIKhURL2XIKOIDFXTMsmp25Puh8IqxGzlNRTfaSx0Ks1mAYDOyLn5nvz1NeSbki%2FrEaWEFajypmGrIqlnLrEyj6YE0ZIkaeS3UXDJw1rAla6RP1vAPgoIsq6DQDhOhBkqWFXcXxDngITWPdZcAkDixxlZeLyyxRR62wRZh0sZ2mSbLb1dZdQyNqOoECKsFLLRcThrbTpp4VpP2vfakU75OslhkQ%2FEx1uH89XxMMHAfQyx9TNCnjyHdPmYBUImVF2n8TSVHwOsgEOdj0%2BtAdwUThKmZIJQPadNrgSV27HxJhO%2FHEi%2FaZG749vNh%2FzZU%2BiaVuIPK8C1zbLeX3aDUVn7%2BE1b%2BKh726Ovq7KQeXtXOqvYfwhxYwhz1CXPQhlnZ9V7kPFtfJYgENgTh4mDmkqDSXehkv6FID9iE5TkahWQUaciVi%2FFBNlK5j8hIKuoAbiQhMWjvqRhelFUOExmbjjrCFxchcDpY3%2Bo59ProAvL%2B0%2Fuhb6XDIaT34c%2FS6trR6jpXaJ2ZMfcOZm9v82eX%2B%2Fd7dg0PIKeYg1wDmdsVmCZMblLteO96R9v1%2Fm9o10fNQ0U7skTbdbrfzNuwHXWn1XNg%2BlMQpWYABrhpr%2Fipu0DMPEAEzMHhJtfXpMB0HqbqXtccLuityxiE3kkdnh%2FAgUE7mAeWObxnt7X2vI6tNXvc5exFGtKMfaGHVDy8u5LN9%2B8PLnfZnt%2B3P3CjgfsDvSP6sUO48mre6AOP0%2B0RPDM81pCjKx6hZi8G%2FGtK7VjzHasjcy%2FsYO1xy1c0HY%2FpslTZ7UO4ib6YgkXChAGeLEC%2FBZP2Wlif4d1xYudj12apfkFB59HAU7HcoZzZ%2Bbh3bxIO3ZvYfi12e%2F0Kp6d56U0QCNQIhGTXSLmRdjGGQ5kDvmDSriHFE1voSGgFXdcxueLN4TuWDeeDHOn%2FsPzKt6KLV1sbRMf3ux7%2FOkCi1%2FvvgKw2f6Ap74G%2FIeH5vw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E  

  // === Алгоритм открытия модального окна «Вход» ===
  // 1. Ждём события DOMContentLoaded
  // 2. Ищем в DOM кнопку loginBtn и контейнер loginModal
  // 3. Навешиваем слушатель click на loginBtn
  //    3.1. Отменяем стандартное поведение ссылки
  //    3.2. Показываем loginModal (добавляем класс .modal--active)
  //    3.3. Логируем в консоль «Modal opened» для проверки
  // 4. Навешиваем слушатель click на элемент закрытия внутри модалки
  //    4.1. Удаляем класс .modal--active у loginModal
  //    4.2. Логируем «Modal closed»
  // 5. Слушатель клика по окну: если кликнули вне контента, закрываем модалку

  // 3) открытие по клику
  loginBtn.addEventListener('click', e => {
    e.preventDefault();                   // 3.1
    loginModal.classList.add('modal--active'); // 3.2
    console.log('Modal opened');          // 3.3
  });

  signupBtn.addEventListener('click', e => {
    e.preventDefault();
    openModal(signupModal);
  });
  // 4) закрытие по кнопке
  closeBtns.forEach(btn => btn.addEventListener('click', closeModals));
  // 5) закрытие при клике вне контента
  window.addEventListener('click', e => {
    if (e.target === loginModal) {
      loginModal.classList.remove('modal--active');
      console.log('Modal closed by outside click');
    }
  });

  function handleAuthForm(modal, successMsg) {
    const form = modal.querySelector('.modal__form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const username = form.username.value.trim();
      if (!username) return;
      localStorage.setItem('username', username);
      alert(`Привет, ${username}! ${successMsg}`);
      closeModals();
    });
  }
  handleAuthForm(loginModal, 'Вы успешно вошли.');
  handleAuthForm(signupModal, 'Вы успешно зарегистрированы.');

  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const msg = contactForm.message.value.trim();
    if (!name || !email || !msg) {
      formMessage.textContent = 'Пожалуйста, заполните все поля.';
      formMessage.classList.add('error');
      return;
    }
    formMessage.textContent = 'Спасибо, сообщение отправлено!';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    contactForm.reset();
  });
});

const teacherList = document.querySelector('.teachers__list');
teacherList.innerHTML = '';
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(t => {
      const card = document.createElement('div');
      card.classList.add('teacher-card');

      const img = document.createElement('img');
      img.src = t.image;
      img.alt = t.subject;
      img.classList.add('teacher-card__image');

      const h3 = document.createElement('h3');
      h3.classList.add('teacher-card__name');
      h3.textContent = t.name;

      const subj = document.createElement('p');
      subj.classList.add('teacher-card__subject');
      subj.textContent = t.subject;

      const desc = document.createElement('p');
      desc.classList.add('teacher-card__description');
      desc.textContent = t.description;

      card.append(img, h3, subj, desc);
      teacherList.append(card);
    });
  })
  .catch(err => console.error('Ошибка загрузки data.json:', err));

new Swiper('.why-us__carousel', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.why-us__next',
    prevEl: '.why-us__prev'
  },
  breakpoints: {
    768: { slidesPerView: 1.6 },
    1024: { slidesPerView: 1.8 }
  }

});

const percentElements = document.querySelectorAll('.subject-card__percent');

function animatePercent(el) {
  const target = parseInt(el.textContent);
  let count = 0;
  el.textContent = '0%';

  const interval = setInterval(() => {
    count++;
    el.textContent = count + '%';
    if (count >= target) clearInterval(interval);
  }, 130);
}

setTimeout(() => {
  percentElements.forEach(el => animatePercent(el));
}, 1500);
