export const createRegistrationModal = () => {
    const registrationModal = {
        html: `
            <div class='modal-background'>
                <div class='registration-modal'>
                    <div class='modal-title'>
                        Регистрация
                    </div>
                    <div class='modal-body'>
                        <div class='registration-input'>
                            <div class='input-title'>
                                Имя
                            </div>
                            <input type='text' class='common-input' id='reg-first-name'>
                        </div>
                        <div class='registration-input'>
                            <div class='input-title'>
                                Фамилия
                            </div>
                            <input type='text' class='common-input' id='reg-last-name'>
                        </div>
                        <div class='registration-input'>
                            <div class='input-title'>
                                Логин
                            </div>
                            <input type='text' class='common-input' id='reg-login'>
                        </div>
                        <div class='registration-input'>
                            <div class='input-title'>
                                Пароль
                            </div>
                            <input type='password' class='common-input' id='reg-password'>
                        </div>
                        <div class='registration-input'>
                            <div class='input-title'>
                                Повторите пароль
                            </div>
                            <input type='password' class='common-input' id='reg-reenter-password'>
                        </div>
                        <button class='common-btn' id='reg-form-btn'>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        `,
        parent: document.querySelector('body')
    }

    registrationModal.parent.insertAdjacentHTML('afterbegin', registrationModal.html);

    const removeRegistrationModal = () => {
        const modalBackground = document.querySelector('.modal-background');
        modalBackground.addEventListener('click', (e) => {
            console.log(e.target)

            if (e.target === modalBackground) {
                modalBackground.remove();
            }
        })
    };

    removeRegistrationModal();
} 
