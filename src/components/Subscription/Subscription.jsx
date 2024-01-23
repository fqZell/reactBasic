import subscriptionPhoto from '../../../public/subscription/subscriptionPhoto.jpg'

import './Subscription.css'

export default function Subscription() {
    return (
        <>
        
        <div className="subscription">
            <div className="subscription-photo">
                <img src={subscriptionPhoto} alt="subscription" />
            </div>

            <h2>Будьте в курсе наших последних новостей</h2>

                <div className="subscription-content">

                    <input type="email" placeholder="Почта" />

                    <div className="button-content">

                        <button>Отправить</button>
                        <p>*нажимая отправить вы соглашаетесь получать рассылку</p>

                    </div>

                </div>

        </div>
        
        </>
    )
}