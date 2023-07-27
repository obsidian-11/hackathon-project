import { Text } from "@chakra-ui/react";

const revalidateTime = 10;

export default function Home({}) {
  return (
    <>
      <Text>Home Page</Text>
    </>
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
