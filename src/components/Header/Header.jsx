import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="max-w-7xl m-auto mt-8 flex justify-between border-b-2 items-center p-4">
            <h1 className='text-5xl'>Vite + React</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;