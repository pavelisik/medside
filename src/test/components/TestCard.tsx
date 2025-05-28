import logo from '../../images/main-logo-big.png';

const TestCard = () => {
    return (
        <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
            <div className="relative h-24 mb-4">
                <img className="absolute w-full rounded" src={logo} alt="/" />
            </div>
            <div>
                <p className="font-semibold">Macbook Air M4 Pro</p>
                <p className="text-sm pb-2">Price: 25 rub</p>
                <p className="font-thin">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil error vitae maiores ullam provident
                    facere nisi tempore. Distinctio modi similique laudantium iure quasi ex? Nesciunt, quam! Iusto rem
                    aliquam assumenda.
                </p>
            </div>
        </div>
    );
};

export default TestCard;
