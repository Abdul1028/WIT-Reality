"use client"
// import { Metadata } from "next";
import Image from "next/image";

import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { MainNav } from "@/components/main-nav";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/RecentSales";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { useState ,useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth} from '../FireBaseConfig'
import { initializeApp } from 'firebase/app';


// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// };



export default function DashboardPage() {

  const [uid,setUid] =useState("")
  const [cred,setCred] =useState("")
  const [ana,setAna] =useState("")
  const [retr,setRetr] =useState("")
  const [genr,setGenr] =useState("")
  const [img,setImg] =useState("")

  
  useEffect(() => {
    if (!auth.app) {
        initializeApp(auth.options);
    }
    // const a = auth.currentUser?.uid
    // setUid(a.toString())
    // console.log("uid",uid)


}, []);


  useEffect(() => {
      const db = getFirestore();

      // const uid = auth.currentUser.uid; // Get the UID of the logged-in user
      const uid = "uEqLM4vZtdafSm9qouyr9yFf9h63"
      const a = auth.currentUser?.uid
      const userDocRef = doc(db, 'users', uid);

      const fetchCredits = async () => {
          try {
              const userDocSnapshot = await getDoc(userDocRef);
              if (userDocSnapshot.exists()) {
                  const userData = userDocSnapshot.data();
                  // Assuming "credits" is the key for credits in the user document
                  console.log(userData)
                  const { credits, tweets_retrieved, tweets_generated, tweets_analyzed, images_generated } = userData;
                  // Store each value in separate variables
                  const creditsValue = credits;
                  const tweetsRetrievedValue = tweets_retrieved;
                  const tweetsGeneratedValue = tweets_generated;
                  const tweetsAnalyzedValue = tweets_analyzed;
                  const imagesGeneratedValue = images_generated;
          
                  console.log("Credits are "+tweetsRetrievedValue)
                  console.log("Credits are "+tweetsGeneratedValue)
                  console.log("Credits are "+tweetsAnalyzedValue)
                  console.log("Credits are: "+imagesGeneratedValue)
                  console.log("Credits are: "+creditsValue)
                  console.log(uid);

                  setCred(creditsValue)
                  setAna(tweetsAnalyzedValue)
                  setGenr(tweetsGeneratedValue)
                  setRetr(tweetsRetrievedValue)
                  setImg(imagesGeneratedValue)

                  
                  return userData


              } else {
                  console.error('User document does not exist');
              }
          } catch (error) {
              console.error('Error fetching credits:', error);
          }
      };

      fetchCredits();
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Credits
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{cred} WIT-Cents</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Tweets Generated
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+{genr}  </div>
                    <p className="text-xs text-muted-foreground">
                      + 687 % from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tweets retrieved</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+ {retr}</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Images Generated
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+ {img }</div>
                    <p className="text-xs text-muted-foreground">
                      + since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Instagram searches</CardTitle>
                    <CardDescription>
                      You made 265 instagram analysis .
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
