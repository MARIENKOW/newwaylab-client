import { Box } from "@mui/material";
import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
import BlogService from "../../../services/BlogService";
import Loading from "../../../components/loading/Loading";
import ErrorElement from "../../../components/ErrorElement";
import { Empty } from "../../../components/Empty";
import BlogItemUser from "../../../components/blog/item/BlogItemUser";
import Contact from "../../../components/home/Contact";

const blog = new BlogService();

export default async function Page() {
   try {
      const { data } = await blog.getAll();
      if (!data || data?.length === 0)
         return (
            <>
               <Box mt={6} mb={6}>
                  <Empty />
               </Box>
               <Box>
                  <ContainerComponent>
                     <Contact />
                  </ContainerComponent>
               </Box>
            </>
         );

      return (
         <>
            <Box mt={6} mb={6}>
               <ContainerComponent>
                  <Box display={"flex"} flexDirection={"column"} gap={4}>
                     {data.map((Blog) => (
                        <BlogItemUser key={Blog?.id} Blog={Blog} />
                     ))}
                  </Box>
               </ContainerComponent>
            </Box>
            <Box>
               <ContainerComponent>
                  <Contact />
               </ContainerComponent>
            </Box>
         </>
      );
   } catch (error) {
      console.log(error);
      return (
         <>
            <Box mt={6} mb={6}>
               <ErrorElement message={error} />
            </Box>
            <Box>
               <ContainerComponent>
                  <Contact />
               </ContainerComponent>
            </Box>
         </>
      );
   }
}
