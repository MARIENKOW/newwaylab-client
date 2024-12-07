import { Box } from "@mui/material";
import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
import BlogService from "../../../services/BlogService";
import ErrorElement from "../../../components/ErrorElement";
import { Empty } from "../../../components/Empty";
import BlogItemUser from "../../../components/blog/item/BlogItemUser";
import WithTitleWrapper from "../../../components/wrappers/WithTitleWrapper";

const blog = new BlogService();

export default async function Page() {
   try {
      const { data } = await blog.getAll();
      console.log("rend");
      if (!data || data?.length === 0)
         return (
            <WithTitleWrapper title={"Блог"}>
               <Empty />
            </WithTitleWrapper>
         );

      return (
         <WithTitleWrapper title={"Блог"}>
            <ContainerComponent>
               <Box display={"flex"} flexDirection={"column"} gap={4}>
                  {data.map((Blog) => (
                     <BlogItemUser key={Blog?.id} Blog={Blog} />
                  ))}
               </Box>
            </ContainerComponent>
         </WithTitleWrapper>
      );
   } catch (error) {
      console.log(error);
      return (
         <WithTitleWrapper title={"Блог"}>
            <ErrorElement message={error} />
         </WithTitleWrapper>
      );
   }
}
