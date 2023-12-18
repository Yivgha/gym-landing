import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
    selectedPage: SelectedPage
}


const Footer = ({setSelectedPage}: Props) => {
  return (
      <footer className="bg-primary-100 py-16">
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
              <div  className="mt-16 basis-1/2 md:mt-0">
                  <img alt="logo" src={Logo} />
                  <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
              </div>
              <div className="mt-16 basis-1/4 md:mt-0 flex flex-col leading-3 gap-8 text-sm tems-center justify-between ">
                  <AnchorLink className="text-primary-500
          transition duration-500 hover:text-white cursor-pointer"
                      href={`#home`}
                      onClick={() => setSelectedPage(SelectedPage.Home)}>Home</AnchorLink>
                    <AnchorLink className="text-primary-500
          transition duration-500 hover:text-white cursor-pointer"
                      href={`#benefits`}
                      onClick={() => setSelectedPage(SelectedPage.Benefits)}>Benefits</AnchorLink>
                  <AnchorLink className="text-primary-500
          transition duration-500 hover:text-white cursor-pointer"
                      href={`#ourclasses`}
                      onClick={() => setSelectedPage(SelectedPage.Benefits)}>Our classes</AnchorLink>
                  <AnchorLink className="text-primary-500
          transition duration-500 hover:text-white cursor-pointer"
                      href={`#contactus`}
                      onClick={() => setSelectedPage(SelectedPage.Benefits)}>Contact us</AnchorLink>
              </div>
              <div className="mt-16 basis-1/4 md:mt-0">
                   <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
              </div>
          </div>
    </footer>
  )
}

export default Footer