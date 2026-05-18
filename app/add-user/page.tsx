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
} from "@mantine/core";

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
    <Container
      size="sm"
      py={{
        base: 20,
        sm: 40,
      }}
    >
      <Paper
        shadow="md"
        radius="lg"
        p={{
          base: "md",
          sm: "xl",
        }}
        withBorder
      >
        <Title
          ta="center"
          mb={25}
          size="h2"
        >
          Create User
        </Title>

        <Stack gap="md">
          {/* IMAGE */}
          <FileInput
            label="Upload Avatar"
            placeholder="Choose image"
            accept="image/*"
            onChange={handleImage}
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
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                firstName:
                  e.target.value,
              })
            }
          />

          <TextInput
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) =>
              setForm({
                ...form,
                lastName:
                  e.target.value,
              })
            }
          />

          <TextInput
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone:
                  e.target.value,
              })
            }
          />

          <TextInput
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location:
                  e.target.value,
              })
            }
          />

          <Select
            placeholder="Select Gender"
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
          />

          <Textarea
            placeholder="Write Your Bio"
            minRows={4}
            value={form.bio}
            onChange={(e) =>
              setForm({
                ...form,
                bio:
                  e.target.value,
              })
            }
          />

          <TextInput
            placeholder="Instagram Link"
            value={form.instagram}
            onChange={(e) =>
              setForm({
                ...form,
                instagram:
                  e.target.value,
              })
            }
          />

          <TextInput
            placeholder="Facebook Link"
            value={form.facebook}
            onChange={(e) =>
              setForm({
                ...form,
                facebook:
                  e.target.value,
              })
            }
          />

          <TextInput
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value,
              })
            }
          />

          <PasswordInput
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
          />

          <Button
            fullWidth
            size="md"
            radius="md"
            loading={loading}    
            onClick={submit}
          >
            {loading
              ? "Creating..."
              : "Create User"}
          </Button>
        </Stack>
      </Paper>
    </Container>      
  );
}