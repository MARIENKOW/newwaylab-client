import style from "./BlogItem.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid2 as Grid } from "@mui/material";
import Link from "next/link";
import { BLOG_ROUTE } from "../../../configs/routerLinks";

const BlogItemUser = ({ Blog }) => {
   if (!Blog) return "sdfsdf";
   return (
      <Link href={BLOG_ROUTE + "/" + Blog?.id}>
         <Card
            sx={{
               height: "100%",
               display: "flex",
               flexDirection: "column",
               border: "1px solid #bebebe",
               borderRadius: 5,
               cursor: "pointer",
               transition: ".2s",
               "&:hover": {
                  transform: "scale(1.01)",
               },
            }}
         >
            <CardContent className={style.text} sx={{ flex: "1" }}>
               <Grid spacing={2} sx={{ mb: "20px" }} container columns={10}>
                  <Grid size={{ xs: 10, sm: 4 }}>
                     <CardMedia
                        sx={{ height: 180, width: "100%" }}
                        image={Blog?.img?.path || "../default.png"}
                        title="BlogImage"
                     />
                  </Grid>
                  <Grid
                     size={{ xs: 10, sm: 6 }}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <Typography
                        sx={{ maxWidth: "400px" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                     >
                        {Blog?.title}
                     </Typography>
                  </Grid>
               </Grid>
               <Typography
                  dangerouslySetInnerHTML={{ __html: Blog?.body }}
                  variant="body2"
                  color="text.secondary"
               />
            </CardContent>
         </Card>
      </Link>
   );
};

export default BlogItemUser;
