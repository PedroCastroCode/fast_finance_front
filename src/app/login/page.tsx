"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Lock, Github, Twitter } from "lucide-react";
import SwitcherTheme from "@/components/SwitcherTheme";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: integrar com sua ação de login (credentials/OAuth)
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-background">
      <div className="absolute top-4 right-4">
        <SwitcherTheme />
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Bem-vindo</CardTitle>
          <CardDescription>Faça login para continuar</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="grid gap-6" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="voce@exemplo.com"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground"
                >
                  Lembrar de mim
                </Label>
              </div>
              <Link
                href="/register"
                className="text-sm text-primary hover:underline"
              >
                Criar conta
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="my-6">
            <div className="flex items-center gap-2">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">
                ou continue com
              </span>
              <Separator className="flex-1" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
        </CardContent>

        <CardFooter className="justify-center text-xs text-muted-foreground">
          Ao continuar, você concorda com nossos Termos e Política de
          Privacidade.
        </CardFooter>
      </Card>
    </div>
  );
}
