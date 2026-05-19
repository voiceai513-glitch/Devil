"use client";

import { useEffect, useState } from "react";

import {
  Container,
  Grid,
  Title,
  Button,
  Group,
  Text,
} from "@mantine/core";

import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";

import Link from "next/link";

export default function HomePage() {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    try {
      const res = await fetch(
        `/api/users?search=${search}`
      );

      const data = await res.json();

      // agar data array hai
      if (Array.isArray(data)) {
        setUsers(data);
      }

      // agar data.users me array hai
      else if (Array.isArray(data.users)) {
        setUsers(data.users);
      }

      // warna empty array
      else {
        setUsers([]);
      }
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    getUsers();
  }, [search]);

  return (
    <Container py={40}>
      <Group
        justify="space-between"
        mb={30}
      >
        <Title>User App</Title>

        <Button
          component={Link}
          href="/add-user"
        >
          Add User
        </Button>
      </Group>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <Grid mt={20}>
        {users.length > 0 ? (
          users.map((user: any) => (
            <Grid.Col
              span={{
                base: 12,
                sm: 6,
                md: 4,
              }}
              key={user._id}
            >
              <UserCard user={user} />
            </Grid.Col>
          ))
        ) : (
          <Text>No Users Found</Text>
        )}
      </Grid>
    </Container>
  );
}