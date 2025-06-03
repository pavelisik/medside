import { FaSearch } from 'react-icons/fa';
import styles from './SearchForm.module.css';
import { useNavigate } from 'react-router';

const SearchForm = () => {
    const navigate = useNavigate();

    return (
        <form id="search" name="search" method="get" action="/">
            <div className="search-group">
                <input
                    className="search_body"
                    type="text"
                    name="s"
                    placeholder="Поиск"
                    defaultValue=""
                    maxLength={70}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    // onFocus="this.placeholder=''"
                    // onBlur="this.placeholder='Поиск'"
                />

                <span className="icon-image search-close"></span>
                <div className="search-button">
                    <button type="submit" className={styles.searchButton} onClick={() => navigate('?s=поиск')}>
                        <FaSearch />
                    </button>

                    {/* <input
                        className="icon-image"
                        id="button"
                        type="submit"
                        name=""
                        value="&#xeb33"
                        disabled={true}
                    /> */}
                    {/* <div className="inner"></div> */}
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
