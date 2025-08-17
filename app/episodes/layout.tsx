import {PropsWithChildren} from "react";
import {NextPage} from "next";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";

const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return <BaseLayout>{children}</BaseLayout>
}

export default Layout