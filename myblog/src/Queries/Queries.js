import { gql } from '@apollo/client';

export const LOAD_BLOGS = gql`
    query{
        blogs {
        title
         body
        }
    }
`