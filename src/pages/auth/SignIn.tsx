
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface SignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>();

  const onSubmit = async (data: SignInForm) => {
    try {
      await signIn(data.email, data.password);
      toast({
        title: "Success",
        description: "Successfully signed in!",
      });
      navigate('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid credentials. Use demo@example.com / password123",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute top-4 left-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-hci-blue/10"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-hci-navy">Sign in to HCI Global</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Demo credentials: demo@example.com / password123
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-1 relative">
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-1 relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: "Password is required" })}
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full bg-hci-blue hover:bg-hci-blue/90">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
