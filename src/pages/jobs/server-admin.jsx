// import { Container } from '@/components/Container'
// import Form from '@/components/Form'
// import React from 'react'
// import Router from 'next/router'

// function ArrowLeftIcon(props) {
//   return (
//     <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
//       <path
//         d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

// function serverAdmin(previousPathname) {
//   return (
//     <Container className="mt-16 px-5 sm:mt-32">
//       {previousPathname && (
//         <div className="lg:absolute lg:-top-14">
//           <button
//             type="button"
//             onClick={() => Router.back()}
//             aria-label="Go back to services"
//             className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
//           >
//             <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
//           </button>
//         </div>
//       )}
//       <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
//         <Form />

//         <div className="lg:order-first lg:row-span-2">
//           <div>
//             <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
//               Server Admin
//             </h1>
//           </div>

//           <div className="mt-20 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
//             <div>
//               <h1 className="my-2 text-2xl text-zinc-800 dark:text-zinc-100">
//                 About this position
//               </h1>
//               <p>
//                 As a server administrator, you would be responsible for
//                 maintaining and managing servers and systems that support an
//                 organization's critical applications and services. You would be
//                 responsible for the day-to-day operation, maintenance, and
//                 security of servers and systems, as well as for troubleshooting
//                 and resolving any issues that may arise.
//               </p>
//             </div>

//             <div className="w-full px-1">
//               <h1 className="my-2 text-2xl text-zinc-800 dark:text-zinc-100">
//                 What will you do as a Server Admin?
//               </h1>
//               <ul className="list-outside list-disc">
//                 <li>
//                   Installing, configuring, and maintaining servers and systems.
//                 </li>

//                 <li>
//                   Managing and monitoring server performance, including
//                   monitoring for and resolving issues such as resource
//                   contention, disk space, and memory usage.
//                 </li>

//                 <li>Managing backups and disaster recovery procedures.</li>

//                 <li>
//                   Managing user accounts, permissions, and access control.
//                 </li>

//                 <li>
//                   Managing and maintaining server security, including firewalls,
//                   antivirus, and intrusion detection systems.
//                 </li>

//                 <li>
//                   Managing and monitoring network infrastructure, including
//                   switches, routers, and firewalls.
//                 </li>

//                 <li>Applying software updates and security patches.</li>

//                 <li>Monitoring server logs and troubleshoot any issues.</li>

//                 <li>Managing and maintaining databases.</li>
//               </ul>
//             </div>

//             <p>
//               You would need a good understanding of server administration,
//               operating systems, and system administration best practices.
//               Strong technical skills in areas such as networking, security, and
//               storage are also important. In addition, strong problem-solving,
//               analytical, and troubleshooting skills are necessary to be able to
//               diagnose and resolve issues quickly and efficiently. Strong
//               communication skills are also important, as server administrators
//               often work with other IT staff, developers, and managers.
//             </p>
//             <p>
//               This position requires to be highly technical and hands-on, and
//               requires a strong commitment to maintaining the reliability,
//               security, and performance of servers and systems. It often
//               requires to work under pressure and be able to work independently
//               and make decisions with little supervision.
//             </p>
//           </div>
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default serverAdmin
