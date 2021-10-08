import gql from 'graphql-tag';

export const GET_LIST = gql`
  query GetLaunches {
    launches {
      cursor
      hasMore
      launches {
        id
        site
        mission {
          name
          missionPatch(size: LARGE)
        }
        rocket {
          id
          name
          type
        }
        isBooked
      }
    }
  }
`;
