import React from 'react'
import './socialmedia.css'

//Material Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Facebook } from '@mui/icons-material';

function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='socialmedia-icon' ><a href='https://www.youtube.com/channel/UCQcnO3Vcf-QCBo6M5wp_kOw' target="_blank" ><YouTubeIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.instagram.com/ncc_emea/' target="_blank" ><InstagramIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon'> <a href="https://www.facebook.com/profile.php?id=100071347492170"> <FacebookIcon sx={{ color: '#fff' }} fontSize='large' /> </a></div>
        </div>
    )
}

export default SocialMedia
