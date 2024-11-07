// import avatarImg from '../../assets/avatarImg.jpg';
import './profileCard.css'

function ProfileCard({user}) {   
  return (
    <div className='wrapper'>    
    <img className='avatar-img' src={user.avatarImg} alt="avatar images" />
    <ul>
        <li>My name is {user.firstAndLastName}.</li>
        <li>My type of activity {user.typeOfActivity}.</li>
        <li>My hobby is {user.hobby}.</li>
    </ul>
    </div>
);
}

export default ProfileCard;