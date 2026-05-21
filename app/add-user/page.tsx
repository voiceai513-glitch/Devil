"use client";

import {
  Button,
  Container,
  TextInput,
  Title,
  Stack,
  PasswordInput,
  Textarea,
  Select,
  Paper,
  FileInput,
  Image,
  Box,
  Grid,
  Text,
  Divider,
  Group,
} from "@mantine/core";

import {
  FaFacebookF,
  FaGoogle,
  FaApple,
} from "react-icons/fa";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    whatsapp: "",
    location: "",
    instagram: "",
    facebook: "",
    bio: "",
    gender: "",
    avatar: "",
  });

  const handleImage = (
    file: File | null
  ) => {
    if (file) {
      const imageUrl =
        URL.createObjectURL(file);

      setPreview(imageUrl);

      setForm({
        ...form,
        avatar: imageUrl,
      });
    }
  };

  const submit = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/users",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert(data.message);

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          whatsapp: "",
          location: "",
          instagram: "",
          facebook: "",
          bio: "",
          gender: "",
          avatar: "",
        });

        router.push("/");
      } else {
        alert(
          data.message ||
          "Something went wrong"
        );
      }
    } catch (error) {
      console.log(error);

      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background:
          "#050b2c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Paper
        radius="xl"
        withBorder
        style={{
          width: "100%",
          maxWidth: 1200,
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #ff00cc, #0000ff, #ff0000, #0dff00)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Grid >


          {/* RIGHT SIDE */}
          <Grid.Col
            span={{
              base: 12,
              md: 6,
            }}
          >
            <Container
              size="sm"
              py={40}
            >
              {/* TOPBAR */}
              <Group
                justify="space-between"
                mb={40}
              >



              </Group>

              {/* HEADER */}
              <Box ta="center" mb={20}>
                <Title fw={900}
                  order={1}
                  c="white"
                >
                  Welcome
                </Title>

                <Text
                  c="dimmed"
                  size="sm"
                  mt={9}
                >
                  Use these awesome forms
                  to login or create new
                  account in your project
                  for free
                </Text>
              </Box>

              {/* FORM CARD */}
              <Paper
                radius="xl"
                p="xl"
                style={{
                  background:
                    "rgba(255,255,255,0.04)",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  backdropFilter:
                    "blur(12px)",
                }}
              >
                {/* SOCIAL */}
                <Text
                  ta="center"
                  c="white"
                  fw={600}
                  mb={20}
                >
                  Register now
                </Text>



                <Divider
                  label="or"
                  labelPosition="center"
                  color="gray"
                  mb={20}
                />

                {/* FORM */}
                <Stack gap="md">
                  {/* IMAGE */}
                  <FileInput
                    label={
                      <Text c="white" fw={900}>
                        Upload Avatar
                      </Text>
                    }
                    placeholder="Choose image"
                    accept="image/*"
                    onChange={handleImage}
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  {preview && (
                    <Image
                      src={preview}
                      alt="preview"
                      radius="md"
                      h={200}
                      fit="cover"
                    />
                  )}

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        First Name
                      </Text>
                    }
                    placeholder="Your first name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        firstName:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        Last Name
                      </Text>
                    }
                    placeholder="Your last name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        lastName:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        Phone Number
                      </Text>
                    }
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        WhatsApp Number
                      </Text>
                    }
                    placeholder="WhatsApp number"
                    value={form.whatsapp}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        whatsapp:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        Location
                      </Text>
                    }
                    placeholder="Your location"
                    value={form.location}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        location:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <Select
                    label={
                      <Text c="white" fw={900}>
                        Gender
                      </Text>
                    }
                    placeholder="Select gender"
                    data={[
                      "Male",
                      "Female",
                      "Other",
                    ]}
                    value={form.gender}
                    onChange={(value) =>
                      setForm({
                        ...form,
                        gender:
                          value || "",
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <Textarea
                    label={
                      <Text c="white" fw={900}>
                        Bio
                      </Text>
                    }
                    placeholder="Write your bio"
                    minRows={4}
                    value={form.bio}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        bio:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        Instagram Link
                      </Text>
                    }
                    placeholder="Instagram link"
                    value={form.instagram}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        instagram:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        Facebook Link
                      </Text>
                    }
                    placeholder="Facebook link"
                    value={form.facebook}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        facebook:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text c="white" fw={900}>
                        Email
                      </Text>
                    }
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <PasswordInput
                    label={
                      <Text c="white" fw={900}>
                        Password
                      </Text>
                    }
                    placeholder="Your password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        background:
                          "transparent",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.2)",
                      },
                    }}
                  />

                  <Button
                    fullWidth
                    size="md"
                    radius="md"
                    loading={loading}
                    onClick={submit}
                    mt={10}
                    style={{
                      background:
                        "linear-gradient(135deg,#0075ff,#0052cc)",
                      height: 50,
                      fontWeight: 700,
                    }}
                  >
                    {loading
                      ? "Creating...."
                      : "SIGN UP"}
                  </Button>


                </Stack>
              </Paper>

              {/* FOOTER */}

            </Container>
          </Grid.Col>
        </Grid>
      </Paper>
    </Box>
  );
}