import Link from 'next/link';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

const navIcons =[
  {SearchIcon},
  {PersonIcon},
  {FavoriteIcon},
]

const Navbar = () => {
  return (
    <header className="w-full">
        <nav className='nav'>
            <Link href ="/" className='=flex items-center gap-1'>
            {/* <Image
            src  = "/assets/icons/logo.svg"
             width = {27}
             height = {27}
             alt="logo"
            /> */}
            <p className='nav-logo '>
             Price<span className='text-primary'>Map</span>
            </p>
            </Link>
<div className='flex items-center gap-5'>
  <SearchIcon></SearchIcon>
  <PersonIcon></PersonIcon>
  <FavoriteIcon></FavoriteIcon>
</div>
        </nav>
    </header>
  )
 }
export default Navbar;
