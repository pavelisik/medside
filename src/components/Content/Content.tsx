import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../Post';

const Content = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('https://medside.ru/wp-json/wp/v2/posts').then((res) => {
            setPosts(res.data);
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section id="content" className="nosb">
            <div id="center">
                <div className="index-block block-3-4">
                    <h2>
                        <a href="/novosti-meditsinyi">Новости медицины</a>
                    </h2>

                    <div className="one-post">
                        <a href="">
                            <img src="https://medside.ru/wp-content/uploads/2022/02/uchenye-rasskazali-o-negativnom-vliyanii-odinochestva-na-podrostkov.jpg" />
                            <h3>
                                Ученые рассказали о негативном влиянии
                                одиночества на подростков
                            </h3>
                        </a>
                    </div>
                    <div className="one-post">
                        <a href="">
                            <img src="https://medside.ru/wp-content/uploads/2022/02/eksperty-rasskazali-kak-izbezhat-zabolevanij-serdcza.jpg" />
                            <h3>
                                Эксперты рассказали, как избежать заболеваний
                                сердца
                            </h3>
                        </a>
                    </div>
                    <div className="one-post">
                        <a href="">
                            <img src="https://medside.ru/wp-content/uploads/2022/02/lyudi-kotorye-ne-boyatsya-staret-yavlyayutsya-bolee-zdorovymi.jpg" />
                            <h3>
                                Люди, которые не боятся стареть, являются более
                                здоровыми
                            </h3>
                        </a>
                    </div>

                    <ul className="list-post">
                        <li>
                            <a href="">Штамм «омикрон» вызывает круп у детей</a>
                        </li>
                        <li>
                            <a href="">
                                Пластырь с инсулином сможет заменить помпу и
                                инъекции
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Эксперты рассказали, какие группы крови
                                эффективно противостоят патогенам
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Алкоголь более пагубно действует на людей с
                                низким весом
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {posts.map((item, key) => (
                <Post post={item} key={item['id']} />
            ))}

            <div className="clear"></div>
        </section>
    );
};

export default Content;
