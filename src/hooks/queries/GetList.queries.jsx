import gql from 'graphql-tag';

export const GET_LIST = gql`
  query GetLaunches($after: String!) {
    launches(after: $after) {
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
