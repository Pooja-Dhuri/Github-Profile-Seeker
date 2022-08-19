import React, { useState } from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";

const GithubCard = ({data}) => {
    const [follows, setFollows] = useState(false);
    const [add,setAdd]=useState(data.following_url.length)
    console.log(data)
  return (
    <div>
          <Center py={6}>
                <Box
                  maxW={"300px"}
                  w={"full"}
                //   bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                  
                >
                  <Image
                    h={"120px"}
                    w={"full"}
                    src={
                      "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    }
                    objectFit={"cover"}
                  />
                  <Flex justify={"center"} mt={-12}>
                    <Avatar
                      size={"xl"}
                      src={data.avatar_url}
                      alt={"Author"}
                      css={{
                        border: "2px solid white",
                      }}
                    />
                  </Flex>

                  <Box p={6} style={{backgroundColor:"white",color:"black"}}>
                    <Stack spacing={0} align={"center"} mb={5}>
                      <Heading
                        fontSize={"2xl"}
                        fontWeight={500}
                        fontFamily={"body"}
                        
                      >
                        {data.login}
                      </Heading>
                      {/* <Text>Frontend Developer</Text> */}
                    </Stack>

                    <Stack direction={"row"} justify={"center"} spacing={6}>
                      <Stack spacing={0} align={"center"}>
                        <Text fontWeight={600}>{add}</Text>
                        <Text fontSize={"sm"} 
                        // color={"gray.500"}
                        >
                          Followers
                        </Text>
                      </Stack>
                    </Stack>
                  <Flex style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}}>
                  <Button
                      w={"full"}
                      mt={8}
                      bg={"blue.200"}
                    //   color={"white"}
                      rounded={"md"}
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                    ><a href={data.html_url} target="_blank">
                         view profile
                    </a>
                 
                    </Button>
                    <Button
                      w={"full"}
                      mt={8}
                      bg={"blue.200"}
                    //   color={"white"}
                      rounded={"md"}
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                      onClick={(e) => {
                        return(
                            <>
                            {setFollows(!follows)}
                            {
                                follows ? setAdd(add-1):setAdd(add+1)
                            }
                            </>
                           )}}
                    >
                      {follows ? "unfollow" : "follow"}
                    </Button>
                    </Flex>
                  </Box>
                </Box>
              </Center>
    </div>
  )
}

export default GithubCard