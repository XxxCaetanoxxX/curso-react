type SocialProps={
    url: string
    icon: React.ReactNode
}

export function Social({url, icon}:SocialProps){
    return(
        <a 
        href={url} 
        // abrir em nova aba
        target="_blank"
        // indicar que é uma url externa
        rel="noopener noreferrer" 
        className="hover:scale-105 p-2 rounded-full bg-white hover:bg-gray-200 transition-transform">{icon}</a>
    )
}