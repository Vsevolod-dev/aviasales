import mainLogo from './assets/img/Logo.svg'
import secondaryLogo from './assets/img/S7 Logo.png'
import check from './assets/img/Shape.svg'

function App() {
    return (
        <div className="App">
            <header className={'header'}>
                <div className="container">
                    <img className={'header__logo'} src={mainLogo} alt="Logo"/>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className={'main__row'}>
                        <section className="column__left">
                            <div className="transfer__filters transfer">
                                <h4>Количество пересадок</h4>
                                <ul className="transfer__list">
                                    <li className="transfer__item">
                                        <div className="transfer__checkbox">
                                            <img src={check} alt=""/>
                                        </div>
                                        <span>Все</span>
                                    </li>
                                    <li className="transfer__item">
                                        <div className="transfer__checkbox">
                                            <img src="" alt=""/>
                                        </div>
                                        <span>Без пересадок</span>
                                    </li>
                                    <li className="transfer__item">
                                        <div className="transfer__checkbox">
                                            <img src="" alt=""/>
                                        </div>
                                        <span>1 пересадка</span>
                                    </li>
                                    <li className="transfer__item">
                                        <div className="transfer__checkbox">
                                            <img src="" alt=""/>
                                        </div>
                                        <span>2 пересадка</span>
                                    </li>
                                    <li className="transfer__item">
                                        <div className="transfer__checkbox">
                                            <img src="" alt=""/>
                                        </div>
                                        <span>3 пересадка</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="column__right">
                            <div className={'price__filters filters'}>
                                <button className="filters__item active">Самый дешевый</button>
                                <button className="filters__item">Самый быстрый</button>
                                <button className="filters__item">Оптимальный</button>
                            </div>
                            <div className="tickets">
                                <ul className="tickets__list">
                                    {
                                        [...Array(5)].map((_, index) => {
                                            console.log(index)
                                            return (
                                            <li key={index} className="tickets__item">
                                                <div className="tickets__header">
                                                    <span className="tickets__price">9990р</span>
                                                    <span className="tickets__logo">
                                                <img src={secondaryLogo} alt="Logo"/>
                                            </span>
                                                </div>
                                                <div className="tickets__info">
                                                    <div className="tickets__direction">
                                                        <div className="block">
                                                            <div className="block__name">MOW – HKT</div>
                                                            <div className="block__content">10:45 – 08:00</div>
                                                        </div>
                                                        <div className="block">
                                                            <div className="block__name">В пути</div>
                                                            <div className="block__content">21ч 15м</div>
                                                        </div>
                                                        <div className="block">
                                                            <div className="block__name">2 пересадки</div>
                                                            <div className="block__content">HKG, JNB</div>
                                                        </div>
                                                    </div>
                                                    <div className="tickets__direction">
                                                        <div className="block">
                                                            <div className="block__name">MOW – HKT</div>
                                                            <div className="block__content">11:20 – 00:50</div>
                                                        </div>
                                                        <div className="block">
                                                            <div className="block__name">В пути</div>
                                                            <div className="block__content">13ч 30м</div>
                                                        </div>
                                                        <div className="block">
                                                            <div className="block__name">1 пересадка</div>
                                                            <div className="block__content">HKG</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>)
                                        })
                                    }
                                </ul>
                                <button className={"tickets__more"}>
                                    Показать еще 5 билетов!
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
