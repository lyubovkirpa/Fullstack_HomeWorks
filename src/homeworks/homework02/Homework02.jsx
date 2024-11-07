import ProfileCard from "../../components/profileCard/ProfileCard";
import avatarStephanie from '../../assets/avatarStephanie.jpg';
import avatarJames from '../../assets/avatarJames.jpg'
import avatarChristina from '../../assets/avatarChristina.jpg';


const usersInfo = [
    {   
        avatarImg: avatarStephanie,    
    firstAndLastName: 'Stephanie Wilson',        
    typeOfActivity: 'farming',
    hobby: 'theater'
    },
    {
        avatarImg: avatarJames, 
    firstAndLastName: 'James Diaz',        
    typeOfActivity: 'building',
    hobby: 'football'
    },
    {
        avatarImg: avatarChristina, 
    firstAndLastName: 'Christina Turner',        
    typeOfActivity: 'commerce',
    hobby: 'sport'
    }
]

function Homework02() {
    return (
        <div>
{usersInfo.map((user, index) => (<ProfileCard key={index} user={user} />))}
        </div>        
    )
    
  
}

export default Homework02;