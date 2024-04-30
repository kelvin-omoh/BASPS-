
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
const inter = Montserrat({ subsets: ["latin"] });
// import { ClerkProvider } from "@clerk/nextjs";
// import 'rsuite/dist/rsuite-no-reset.min.css';
// import { CustomProvider } from 'rsuite';
import { NextUIProvider } from '@nextui-org/react'
import { Providers } from "./providers/providers";
import { AppProvider } from "./context/AppProvider/Provider";
import { Inter as FontSans } from "next/font/google"
import { UserProvider } from '@auth0/nextjs-auth0/client';


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

//Client ID: 590248802524-livem0c881og973f1i6c4ni7kkmn5dll.apps.googleusercontent.com

//Client secret: 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
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en">




      <UserProvider>
        <AppProvider  >

          <body className={inter.className}>
            <div className=" relative w-full">
              <div className=" fixed w-[15%] h-screen text-white left-0 px-4 flex flex-col bg-[#163d58] ">
                <Sidebar />
              </div>

              <div className=" absolute flex justify-between  top-0 w-[85%] h-screen right-0   ml-9">
                <div className=" w-full">
                  <Header />
                  <div className=" z-0 mt-[9%]  w-full ">
                    <Providers>
                      {/* <CustomProvider> */}
                      {children}
                      {/* </CustomProvider> */}
                    </Providers>
                  </div>


                </div>

              </div>



            </div>

          </body>

        </AppProvider>
      </UserProvider>



    </html>




  );
}
