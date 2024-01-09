export default function Footer() {
    return (
    <footer className="bg-[#122038] z-20 mt-auto text-white">

      <div className="mx-auto w-full p-4 h-100 py-6 lg:py-8">
        <div className='flex flex-row flex-grow justify-between'>
          <div className='flex flex-col md:flex-row '>
            <p className="text-xl md:text-3xl mx-4 pt-6 md:pb-auto md:pt-auto text-center md:text-start text-[#E2E3EE]">Contact Us</p>
            <div className="flex mt-4 md:pt-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="pl-0 md:pl-4 w-4 h-4 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4 md:w-8 md:h-8" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.585 0C51.8484 0 53.9802 0.442937 55.9805 1.32881C57.9807 2.21468 59.7309 3.42269 61.2311 4.95284C62.7313 6.48298 63.9156 8.26815 64.7842 10.3083C65.6527 12.3485 66.087 14.523 66.087 16.8316V50.4948C66.087 52.8034 65.6527 54.9913 64.7842 57.0583C63.9156 59.1254 62.7313 60.9239 61.2311 62.4541C59.7309 63.9842 57.9807 65.1922 55.9805 66.0781C53.9802 66.964 51.8484 67.4069 49.585 67.4069H16.502C14.2386 67.4069 12.1067 66.964 10.1065 66.0781C8.10625 65.1922 6.35603 63.9842 4.85585 62.4541C3.35567 60.9239 2.17132 59.1254 1.30279 57.0583C0.434263 54.9913 0 52.8034 0 50.4948V16.8316C0 14.523 0.434263 12.3485 1.30279 10.3083C2.17132 8.26815 3.35567 6.48298 4.85585 4.95284C6.35603 3.42269 8.10625 2.21468 10.1065 1.32881C12.1067 0.442937 14.2386 0 16.502 0H49.585ZM22.7396 25.2877H14.4491V52.6692H22.7396V25.2877ZM18.6338 23.1132C19.7392 23.1132 20.6999 22.7106 21.5158 21.9052C22.3317 21.0999 22.7396 20.1066 22.7396 18.9255C22.7396 17.7443 22.3317 16.7511 21.5158 15.9457C20.6999 15.1404 19.7392 14.7377 18.6338 14.7377C17.4758 14.7377 16.4888 15.1404 15.673 15.9457C14.8571 16.7511 14.4491 17.7443 14.4491 18.9255C14.4491 20.1066 14.8571 21.0999 15.673 21.9052C16.4888 22.7106 17.4758 23.1132 18.6338 23.1132ZM51.6378 36.804C51.6378 34.8712 51.1115 32.9787 50.0587 31.1264C49.0059 29.2741 47.6374 27.8648 45.9529 26.8983C44.4264 26.0393 42.6499 25.583 40.6233 25.5293C38.5968 25.4756 36.7676 25.8246 35.1358 26.5762V25.2877H26.8454V52.6692H35.1358V35.9181L38.531 34.2269C38.9521 34.0122 39.5311 33.9048 40.268 33.9048C41.005 33.9048 41.5577 34.039 41.9261 34.3075C42.242 34.4685 42.5578 34.8175 42.8736 35.3544C43.1894 35.8913 43.3474 36.3745 43.3474 36.804V52.6692H51.6378V36.804Z" fill="#71789D"/>
              </svg>
                  <span className="sr-only">LinkedIn accountf</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4 md:w-8 md:h-8" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.5202 33.7638C44.5202 32.851 44.3886 31.8578 44.1254 30.784H47.4416V47.0519C47.4416 47.4814 47.2969 47.8304 47.0074 48.0988C46.7178 48.3672 46.3625 48.5015 45.9414 48.5015H19.9646C19.5435 48.5015 19.2013 48.3672 18.9382 48.0988C18.675 47.8304 18.5434 47.4814 18.5434 47.0519V30.784H21.7806C21.5174 31.8578 21.3858 32.851 21.3858 33.7638C21.3858 35.3744 21.6885 36.9046 22.2938 38.3542C22.8992 39.8038 23.7282 41.0521 24.781 42.099C25.8337 43.146 27.0707 43.9781 28.4919 44.5956C29.9132 45.213 31.4134 45.5217 32.9925 45.5217C34.5716 45.5217 36.0718 45.213 37.493 44.5956C38.9143 43.9781 40.1381 43.146 41.1645 42.099C42.191 41.0521 43.0069 39.8038 43.6122 38.3542C44.2175 36.9046 44.5202 35.3744 44.5202 33.7638ZM32.9925 41.0923C31.9924 41.0923 31.0449 40.9044 30.15 40.5286C29.2552 40.1528 28.4788 39.6293 27.8208 38.9582C27.1628 38.2871 26.6496 37.5086 26.2812 36.6227C25.9127 35.7368 25.7285 34.7838 25.7285 33.7638C25.7285 32.7437 25.9127 31.7772 26.2812 30.8645C26.6496 29.9518 27.1628 29.1599 27.8208 28.4888C28.4788 27.8177 29.2552 27.2942 30.15 26.9184C31.0449 26.5425 31.9924 26.3546 32.9925 26.3546C33.9926 26.3546 34.9269 26.5425 35.7955 26.9184C36.664 27.2942 37.4272 27.8177 38.0852 28.4888C38.7432 29.1599 39.2564 29.9518 39.6249 30.8645C39.9933 31.7772 40.1776 32.7437 40.1776 33.7638C40.1776 34.7838 39.9933 35.7368 39.6249 36.6227C39.2564 37.5086 38.7432 38.2871 38.0852 38.9582C37.4272 39.6293 36.664 40.1528 35.7955 40.5286C34.9269 40.9044 33.9926 41.0923 32.9925 41.0923ZM45.9414 19.026C46.3625 19.026 46.7178 19.1603 47.0074 19.4287C47.2969 19.6972 47.4416 20.0461 47.4416 20.4756V24.905C47.4416 25.3345 47.2969 25.6835 47.0074 25.952C46.7178 26.2204 46.3625 26.3546 45.9414 26.3546H41.5988C41.1777 26.3546 40.8355 26.2204 40.5724 25.952C40.3092 25.6835 40.1776 25.3345 40.1776 24.905V20.4756C40.1776 20.0461 40.3092 19.6972 40.5724 19.4287C40.8355 19.1603 41.1777 19.026 41.5988 19.026H45.9414ZM49.8103 0.0200195C52.0738 0.0200195 54.2188 0.462956 56.2453 1.34883C58.2719 2.2347 60.0352 3.44271 61.5354 4.97286C63.0356 6.503 64.22 8.28817 65.0885 10.3284C65.957 12.3686 66.3913 14.543 66.3913 16.8516V50.5148C66.3913 52.8235 65.957 55.0113 65.0885 57.0783C64.22 59.1454 63.0356 60.944 61.5354 62.4741C60.0352 64.0043 58.2719 65.2123 56.2453 66.0981C54.2188 66.984 52.0738 67.4269 49.8103 67.4269H16.8063C14.5429 67.4269 12.4111 66.984 10.4108 66.0981C8.41057 65.2123 6.66036 64.0043 5.16017 62.4741C3.65999 60.944 2.47564 59.1454 1.60711 57.0783C0.738584 55.0113 0.304321 52.8235 0.304321 50.5148V16.8516C0.304321 14.543 0.738584 12.3686 1.60711 10.3284C2.47564 8.28817 3.65999 6.503 5.16017 4.97286C6.66036 3.44271 8.41057 2.2347 10.4108 1.34883C12.4111 0.462956 14.5429 0.0200195 16.8063 0.0200195H49.8103ZM51.7842 19.026C51.7842 17.7912 51.3631 16.7442 50.5209 15.8852C49.6787 15.0262 48.6523 14.5967 47.4416 14.5967H18.5434C17.3327 14.5967 16.3063 15.0262 15.4641 15.8852C14.6218 16.7442 14.2007 17.7912 14.2007 19.026V48.5015C14.2007 49.7363 14.6218 50.7833 15.4641 51.6423C16.3063 52.5013 17.3327 52.9308 18.5434 52.9308H47.4416C48.6523 52.9308 49.6787 52.5013 50.5209 51.6423C51.3631 50.7833 51.7842 49.7363 51.7842 48.5015V19.026Z" fill="#71789D"/>
              </svg>
              </a>
              
            </div>
          </div>
          <div className="justify-end">
            <img src="/img/integration_2024.png" className="w-[15rem] md:w-[20rem] ml-[-15px] md:ml-[-40px] md:mt-[-40px]" alt="Integration Logo" />
            <a href="" className="hidden md:block text-sm md:w-auto text-center mr-[20%]">Know More About Integration</a>
            <a href="" className="block md:hidden text-sm md:w-auto pt-2 text-center mr-[10%] ">Know More</a>

          </div>
        </div>
      </div>
        
      <div className="hidden md:block max-h-2 w-full h-auto md:min-h-[16rem] ">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className=" flex px-20 justify-center">
            <div className='sm:mx-8 md:flex md:flex-col md:flex-wrap text-center'>
              <p className='font-bold text-2xl text-red-500 pb-2'>Sections</p>
              <div className="flex flex-row">
                <ul className='mr-8'>
                  <li><a href="/">Home Page</a></li>
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="">Program Itinerary</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/">Registration</a></li>
                </ul>
                <div>
                <div className="spacer"></div>
                <ul>
                  <li><a href="">Gallery</a></li>
                  <li><a href="">Merchandise</a></li>
                  <li><a href="">Resources</a></li>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">Our Team</a></li>
                </ul>
              </div>
            </div>
            </div>
            <div className="sm:mx-8 flex flex-col">
              <p className='font-bold text-2xl text-red-500 pb-2'>Previous Year Papers</p>
              <ul className="text-center">
                <li><a href="">2023 Question Paper</a></li>
                <li><a href="">2022 Question Paper</a></li>
                <li><a href="">2021 Question Paper</a></li>
                <li><a href="">2020 Question Paper</a></li>
                <li><a href="">2019 Question Paper</a></li>
              </ul>
            </div>
        
          </div>
      </div>
    </footer>
    )
}