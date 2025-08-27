import errorImg from "../../assets/404.gif"

const Error = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <img src={errorImg} alt="Error Photo" />
        </div>
    );
};

export default Error;