

async function queryHasuraGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      process.env.NEXT_PUBLIC_HASURA_ADMIN_URL,
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret" : process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET
        },
        body: JSON.stringify({
          query: operationsDoc ,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }
  
  const operationsDoc = `
    query MyQuery {
      email
      id
      issuer
      publicAddress
    }
    
  `;
  
  function fetchMyQuery() {
    return queryHasuraGraphQL(
      operationsDoc,
      "MyQuery",
      {}
    );
  }
  
//   function fetchMyQuery2() {
//     return fetchGraphQL(
//       operationsDoc,
//       "MyQuery2",
//       {}
//     );
//   }
  
//   function fetchMyQuery3() {
//     return fetchGraphQL(
//       operationsDoc,
//       "MyQuery3",
//       {}
//     );
//   }
  
//   function fetchMyQuery4() {
//     return fetchGraphQL(
//       operationsDoc,
//       "MyQuery4",
//       {}
//     );
//   }
  
//   function fetchMyQuery5() {
//     return fetchGraphQL(
//       operationsDoc,
//       "MyQuery5",
//       {}
//     );
//   }
  
  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
  startFetchMyQuery();
  
//   async function startFetchMyQuery2() {
//     const { errors, data } = await fetchMyQuery2();
  
//     if (errors) {
//       // handle those errors like a pro
//       console.error(errors);
//     }
  
//     // do something great with this precious data
//     console.log(data);
//   }
  
//   startFetchMyQuery2();
  
//   async function startFetchMyQuery3() {
//     const { errors, data } = await fetchMyQuery3();
  
//     if (errors) {
//       // handle those errors like a pro
//       console.error(errors);
//     }
  
//     // do something great with this precious data
//     console.log(data);
//   }
  
//   startFetchMyQuery3();
  
//   async function startFetchMyQuery4() {
//     const { errors, data } = await fetchMyQuery4();
  
//     if (errors) {
//       // handle those errors like a pro
//       console.error(errors);
//     }
  
//     // do something great with this precious data
//     console.log(data);
//   }
  
//   startFetchMyQuery4();
  
//   async function startFetchMyQuery5() {
//     const { errors, data } = await fetchMyQuery5();
  
//     if (errors) {
//       // handle those errors like a pro
//       console.error(errors);
//     }
  
//     // do something great with this precious data
//     console.log(data);
//   }
  
//   startFetchMyQuery5();