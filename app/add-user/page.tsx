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
  Flex,
  ThemeIcon,
} from "@mantine/core";

import {
  FaFacebookF,
  FaGoogle,
  FaApple,
  FaUserAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
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
          "linear-gradient(135deg,#020617,#0f172a,#111827,#1e293b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Paper
        radius="30px"
        withBorder
        shadow="xl"
        style={{
          width: "100%",
          maxWidth: 1300,
          overflow: "hidden",
          background:
            "rgba(15,23,42,0.85)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter:
            "blur(18px)",
        }}
      >
        <Grid >
          {/* LEFT SIDE */}
          <Grid.Col
            span={{
              base: 12,
              md: 5,
            }}
          >
            <Box
              style={{
                height: "100%",
                minHeight: "100%",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop')",
                backgroundSize:
                  "cover",
                backgroundPosition:
                  "center",
                position: "relative",
              }}
            >
              {/* OVERLAY */}
              <Box
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg,rgba(0,0,0,0.1),rgba(2,6,23,0.92))",
                }}
              />

              {/* CONTENT */}
              <Flex
                direction="column"
                justify="space-between"
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  padding: 40,
                }}
              >
                <Box>
                  <Group mb={20}>
                    <ThemeIcon
                      size={55}
                      radius="xl"
                      variant="gradient"
                      gradient={{
                        from: "cyan",
                        to: "blue",
                      }}
                    >
                      <FaUserAlt size={24} />
                    </ThemeIcon>

                    <Box>
                      <Title
                        order={2}
                        c="white"
                        fw={900}
                      >
                        USER PANEL
                      </Title>

                      <Text
                        c="gray.3"
                        size="sm"
                      >
                        Premium Dashboard
                      </Text>
                    </Box>
                  </Group>

                  <Title
                    order={1}
                    c="white"
                    fw={900}
                    mt={70}
                    style={{
                      lineHeight: 1.2,
                    }}
                  >
                    Create 
                    User Profiles
                  </Title>

                  <Text
                    c="gray.3"
                    size="md"
                    mt={20}
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                  Online markting
                  </Text>
                </Box>

                <Group mt={40}>
                  

                 
                </Group>
              </Flex>
            </Box>
          </Grid.Col>

          {/* RIGHT SIDE */}
          <Grid.Col
            span={{
              base: 12,
              md: 7,
            }}
          >
            <Container
              size="sm"
              py={50}
            >
              {/* HEADER */}
              <Box mb={30}>
                <Title
                  order={1}
                  c="white"
                  fw={900}
                >
                  Welcome Back 
                </Title>

                <Text
                  c="gray.4"
                  mt={8}
                >
                  Fill all user details to
                  create account
                </Text>
              </Box>

              {/* FORM CARD */}
              <Paper
                radius="25px"
                p="xl"
                style={{
                  background:
                    "rgba(255,255,255,0.04)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  backdropFilter:
                    "blur(14px)",
                }}
              >
                <Group grow mb={20}>
                

                 

                  
                </Group>

                <Divider
                  label="Create User"
                  labelPosition="center"
                  color="gray"
                  mb={25}
                />

                {/* FORM */}
                <Stack gap="md">
                  <FileInput
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
                        Upload Avatar
                      </Text>
                    }
                    placeholder="Choose image"
                    accept="image/*"
                    onChange={handleImage}
                    styles={{
                      input: {
                        height: 50,
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  {preview && (
                    <Image
                      src={preview}
                      alt="preview"
                      radius="xl"
                      h={220}
                      fit="cover"
                    />
                  )}

                  <Grid>
                    <Grid.Col span={6}>
                      <TextInput
                        label={
                          <Text
                            c="white"
                            fw={700}
                          >
                            First Name
                          </Text>
                        }
                        placeholder="First name"
                        value={
                          form.firstName
                        }
                        leftSection={
                          <FaUserAlt />
                        }
                        onChange={(e) =>
                          setForm({
                            ...form,
                            firstName:
                              e.target
                                .value,
                          })
                        }
                        styles={{
                          input: {
                            height: 50,
                            background:
                              "rgba(255,255,255,0.05)",
                            color:
                              "white",
                            border:
                              "1px solid rgba(255,255,255,0.1)",
                          },
                        }}
                      />
                    </Grid.Col>

                    <Grid.Col span={6}>
                      <TextInput
                        label={
                          <Text
                            c="white"
                            fw={700}
                          >
                            Last Name
                          </Text>
                        }
                        placeholder="Last name"
                        value={
                          form.lastName
                        }
                        leftSection={
                          <FaUserAlt />
                        }
                        onChange={(e) =>
                          setForm({
                            ...form,
                            lastName:
                              e.target
                                .value,
                          })
                        }
                        styles={{
                          input: {
                            height: 50,
                            background:
                              "rgba(255,255,255,0.05)",
                            color:
                              "white",
                            border:
                              "1px solid rgba(255,255,255,0.1)",
                          },
                        }}
                      />
                    </Grid.Col>
                  </Grid>

                  <TextInput
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
                        Email
                      </Text>
                    }
                    placeholder="Your email"
                    value={form.email}
                    leftSection={
                      <FaEnvelope />
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        height: 50,
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  <PasswordInput
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
                        Password
                      </Text>
                    }
                    placeholder="Password"
                    value={
                      form.password
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        height: 50,
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  <Grid>
                    <Grid.Col span={6}>
                      <TextInput
                        label={
                          <Text
                            c="white"
                            fw={700}
                          >
                            Phone
                          </Text>
                        }
                        placeholder="Phone"
                        value={form.phone}
                        leftSection={
                          <FaPhoneAlt />
                        }
                        onChange={(e) =>
                          setForm({
                            ...form,
                            phone:
                              e.target
                                .value,
                          })
                        }
                        styles={{
                          input: {
                            height: 50,
                            background:
                              "rgba(255,255,255,0.05)",
                            color:
                              "white",
                            border:
                              "1px solid rgba(255,255,255,0.1)",
                          },
                        }}
                      />
                    </Grid.Col>

                    <Grid.Col span={6}>
                      <TextInput
                        label={
                          <Text
                            c="white"
                            fw={700}
                          >
                            WhatsApp
                          </Text>
                        }
                        placeholder="WhatsApp"
                        value={
                          form.whatsapp
                        }
                        onChange={(e) =>
                          setForm({
                            ...form,
                            whatsapp:
                              e.target
                                .value,
                          })
                        }
                        styles={{
                          input: {
                            height: 50,
                            background:
                              "rgba(255,255,255,0.05)",
                            color:
                              "white",
                            border:
                              "1px solid rgba(255,255,255,0.1)",
                          },
                        }}
                      />
                    </Grid.Col>
                  </Grid>

                  <TextInput
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
                        Location
                      </Text>
                    }
                    placeholder="Your location"
                    value={
                      form.location
                    }
                    leftSection={
                      <FaMapMarkerAlt />
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        location:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        height: 50,
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  <Select
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
                        Gender
                      </Text>
                    }
                    placeholder="Select gender"
                    data={[
                      "Male",
                      "Female",
                      "Other",
                    ]}
                    value={
                      form.gender
                    }
                    onChange={(value) =>
                      setForm({
                        ...form,
                        gender:
                          value || "",
                      })
                    }
                    styles={{
                      input: {
                        height: 50,
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  <Textarea
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
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
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
                        Instagram
                      </Text>
                    }
                    placeholder="Instagram link"
                    value={
                      form.instagram
                    }
                    leftSection={
                      <FaInstagram />
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        instagram:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        height: 50,
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  <TextInput
                    label={
                      <Text
                        c="white"
                        fw={700}
                      >
                        Facebook
                      </Text>
                    }
                    placeholder="Facebook link"
                    value={
                      form.facebook
                    }
                    leftSection={
                      <FaFacebookF />
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        facebook:
                          e.target.value,
                      })
                    }
                    styles={{
                      input: {
                        height: 50,
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "white",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                      },
                    }}
                  />

                  <Button
                    fullWidth
                    size="lg"
                    radius="xl"
                    loading={loading}
                    onClick={submit}
                    mt={10}
                    style={{
                      background:
                        "linear-gradient(135deg,#2563eb,#7c3aed)",
                      height: 55,
                      fontWeight: 800,
                      fontSize: 16,
                      boxShadow:
                        "0 12px 30px rgba(124,58,237,0.35)",
                    }}
                  >
                    {loading
                      ? "Creating..."
                      : "CREATE USER"}
                  </Button>
                </Stack>
              </Paper>
            </Container>
          </Grid.Col>
        </Grid>
      </Paper>
    </Box>
  );
}