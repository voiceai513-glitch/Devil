"use client";

import { useEffect, useState } from "react";

import {
  Container,
  Grid,
  Title,
  Button,
  Group,
  Text,
  Box,
  Paper,
  Flex,
  Badge,
  Loader,
} from "@mantine/core";

import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";

import { MdPaid } from "react-icons/md";
import {
  FaUsers,
  FaUserPlus,
} from "react-icons/fa";

import Link from "next/link";

export default function HomePage() {
  const [users, setUsers] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [opened, setOpened] =
    useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/users?search=${search}`
      );

      const data = await res.json();

      // agar data array hai
      if (Array.isArray(data)) {
        setUsers(data);
      }

      // agar data.users me array hai
      else if (
        Array.isArray(data.users)
      ) {
        setUsers(data.users);
      }

      // warna empty array
      else {
        setUsers([]);
      }
    } catch (error) {
      console.log(error);

      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [search]);

  return (
    <Box
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827)",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Container size="xl">
        {/* TOP HEADER */}
        <Paper
          radius="30px"
          p="xl"
          mb={35}
          style={{
            background:
              "linear-gradient(135deg,#111827,#1e293b,#0f172a)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            wrap="wrap"
            gap={20}
          >
            {/* LEFT */}
            <Group>
              <Box
                onClick={() =>
                  setOpened(true)
                }
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "center",
                  width: 75,
                  height: 75,
                  borderRadius: 22,
                  background:
                    "linear-gradient(135deg,#00c6ff,#0072ff)",
                  boxShadow:
                    "0 0 30px rgba(0,114,255,0.45)",
                }}
              >
                <MdPaid
                  size={40}
                  color="white"
                />
              </Box>

              <Box>
                <Title
                  order={1}
                  c="white"
                  fw={900}
                >
                  User Dashboard
                </Title>

                <Text
                  c="gray.4"
                  mt={5}
                >
                 Online markting dashboard 
                </Text>
              </Box>
            </Group>

            {/* RIGHT */}
            <Group>
              <Badge
                size="xl"
                radius="xl"
                variant="gradient"
                gradient={{
                  from: "cyan",
                  to: "blue",
                }}
                leftSection={
                  <FaUsers />
                }
              >
                Total Users :{" "}
                {users.length}
              </Badge>

              <Button
                component={Link}
                href="/add-user"
                size="lg"
                radius="xl"
                leftSection={
                  <FaUserPlus />
                }
                style={{
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                  height: 52,
                  paddingLeft: 24,
                  paddingRight: 24,
                  fontWeight: 700,
                  boxShadow:
                    "0 10px 25px rgba(124,58,237,0.35)",
                }}
              >
                Add User
              </Button>
            </Group>
          </Flex>
        </Paper>

        {/* SEARCH */}
        <Paper
          radius="24px"
          p="lg"
          mb={30}
          style={{
            background:
              "rgba(255,255,255,0.05)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            backdropFilter:
              "blur(14px)",
          }}
        >
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </Paper>

        {/* USERS */}
        {loading ? (
          <Flex
            justify="center"
            align="center"
            py={80}
          >
            <Loader
              color="blue"
              size="lg"
            />
          </Flex>
        ) : users.length > 0 ? (
          <Grid >
            {users.map(
              (user: any) => (
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 6,
                    lg: 4,
                  }}
                  key={user._id}
                >
                  <UserCard
                    user={user}
                  />
                </Grid.Col>
              )
            )}
          </Grid>
        ) : (
          <Paper
            radius="24px"
            p={60}
            ta="center"
            style={{
              background:
                "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Title
              c="white"
              order={2}
            >
              No Users Found
            </Title>

            <Text
              c="gray.5"
              mt={10}
            >
              Try searching with a
              different keyword
            </Text>
          </Paper>
        )}
      </Container>
    </Box>
  );
}