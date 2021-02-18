import { GetStaticProps, GetStaticPaths } from 'next';


const getStaticPaths: GetStaticPaths = async () => {
        return {
            paths: ({
                params: {
                    post: ,
                },
            }),
            fallback: false,
        };
};
const getStaticProps: GetStaticProps = async () => {};
