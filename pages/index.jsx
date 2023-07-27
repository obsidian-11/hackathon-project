import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home({}) {
  return (
    <Box p="24">
      <Link as={NextLink} href="/dashboard">
        Dashboard
      </Link>
      <br />
      <Link as={NextLink} href="/login">
        Login Page
      </Link>
      <br />
      <Link as={NextLink} href="/register">
        Sign Up Page
      </Link>
      <br />
    </Box>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetchPageData();

//   if (res?.error) {
//     return {
//       props: {
//         commonsData: [],
//       },
//       revalidate: revalidateTime,
//     };
//   }

//   const [commons] = res;

//   return {
//     props: {
//       //   commonsData: commons.data.data.attributes.Header,
//       commonsData: {},
//     },
//     revalidate: revalidateTime,
//   };
// };
