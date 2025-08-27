export default function Card(){
    return(
        <>
        <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline>
        <source src="https://videocdn.cdnpk.net/videos/b690859e-5c4d-57d4-a398-0f46fa287090/horizontal/previews/clear/large.mp4?token=exp=1756261869~hmac=8dbfb5250ff4551360f9232f02d0fdbfc00088bfcbdc4587aeb7b03dc0892c7e" type="video/mp4" />
        Your browser does not support the video tag.
         </video>
        <div className="card-container">
        <header>
            <img src="https://as1.ftcdn.net/v2/jpg/06/16/34/14/1000_F_616341456_XXK5WxqfIXhbe29p6q8IGwhxRpVajfUk.png" alt="Ganesha" />
            <h2>Happy</h2>
            <h1>Ganesh</h1>
            <h3>CHATURTHI</h3>
            
            
        </header>
        <main>
             <h4>From</h4>
            <img src="https://asset-cdn.learnyst.com/assets/schools/134719/schoolLogo/200_200_e7ma0m.png" alt="Tap Academy" />
            <p>✨Ganpati Bappa Morya✨</p>
        </main>
        <footer>
            <p>May Lord Ganesha bless you with wisdom and prosperity</p>
            <h6>Made by - yashodeep sonar</h6>
            <h6>@Copyright 2025</h6>
        </footer>
        </div>
        </>
    )
}