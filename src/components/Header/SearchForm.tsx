const SearchForm = () => {
    return (
        <form id="search" name="search" method="get" action="/">
            <div className="search-group">
                <input
                    className="search_body"
                    type="text"
                    name="s"
                    placeholder="Поиск"
                    value=""
                    maxLength={70}
                    accessKey="s"
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    // onFocus="this.placeholder=''"
                    // onBlur="this.placeholder='Поиск'"
                />

                <span className="icon-image search-close"></span>
                <div className="search-button">
                    <input
                        className="icon-image"
                        id="button"
                        type="submit"
                        name=""
                        value="&#xeb33"
                        disabled={true}
                    />
                    <div className="inner"></div>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
