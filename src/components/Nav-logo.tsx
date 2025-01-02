    import Image from "next/image";
    import Link from "next/link";


    const Logo = ({height,width,priority = false}:{
        height:number,
        width:number,
        priority?:boolean;
    }) => {
        return (
            <div className="logo-container">
                <Link href="/" passHref>
                <Image src={"/Medium.svg"} alt = "Medium Logo" height={height} width={width} priority = {priority}/>
                </Link>
            </div>
        );
    }
    
    export default Logo;