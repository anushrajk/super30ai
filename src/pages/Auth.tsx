import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

const Auth = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate("/admin/blogs", { replace: true });
  }, [user, loading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Signed in");
    navigate("/admin/blogs");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/blogs`,
        data: { full_name: name },
      },
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Account created — you're signed in");
    navigate("/admin/blogs");
  };

  return (
    <>
      <Helmet>
        <title>Sign in — Blog CMS | The Super 30</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Blog CMS</CardTitle>
            <p className="text-sm text-muted-foreground">
              Sign in to create and publish blog posts.
            </p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-3 mt-4">
                  <div>
                    <Label htmlFor="le">Email</Label>
                    <Input id="le" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="lp">Password</Label>
                    <Input id="lp" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <Button type="submit" disabled={busy} className="w-full">
                    {busy ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-3 mt-4">
                  <div>
                    <Label htmlFor="sn">Display name</Label>
                    <Input id="sn" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <Label htmlFor="se">Email</Label>
                    <Input id="se" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="sp">Password (min 6 chars)</Label>
                    <Input id="sp" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <Button type="submit" disabled={busy} className="w-full">
                    {busy ? "Creating..." : "Create account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            <div className="mt-6 text-center text-xs text-muted-foreground">
              <Link to="/" className="underline">← Back to site</Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Auth;