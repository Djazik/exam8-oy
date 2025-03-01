import React from 'react'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs'
import "./return.scss"
const Return = () => {

return (
    <section className="container">
        <div className=" return">
            <BreadCrumbs />
            <div className="return__wrapper">
                <h2 className="return__title">Возврат</h2>
                <div className="return__content">
                    <div className="return__box">
                        <h4>Обмен и возврат по желанию покупателя</h4>
                        <p>Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:</p>
                        <ul>
                            <li>Товар имеет первоначальный вид, имеется товарная кондиция;</li>
                            <li>Товар имеет полную комплектацию, включая упаковочные материалы;</li>
                            <li>Товар не имеет следов подключался и не имеет признаков монтажа;</li>
                            <li>Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;</li>
                            <li>Есть документ, подтверждающий покупку в нашем интернет-магазине.</li>
                            <li>Для возврата товара необходимо привезти его к нам в офис.</li>
                            <li>Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании  оплачиваются клиентом.</li>
                            <li>*В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера</li>
                        </ul>
                    </div>

                    <div className="return__box">
                        <h4>Обмен и возврат по ошибке продавца</h4>
                        <p>Причины обмена или возврата по ошибке продавца:</p>
                        <ul>
                            <li>Неполная комплектация товара</li>
                            <li>Брак или дефект товара</li>
                            <li>Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/</li>
                            <li>Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно</li>
                        </ul>
                    </div>

                    <div className="return__box">
                        <h4>Возврат денежных средств</h4>
                        <p>Возврат денежных средств осуществляется путем переводана банковские реквизиты покупателя при наличии заявления от покупателя.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Return