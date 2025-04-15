import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const user = {
    name: "Rav",
    plan: "Pro",
    generationsUsed: 34,
    generationLimit: 250
  }

  const percentUsed = (user.generationsUsed / user.generationLimit) * 100

  const modelImages = [
    {
      label: "Model Proportions Male",
      src: "https://files.chat.openai.com/file-00000000ac606246aca62cf6c8355074"
    },
    {
      label: "Model Proportions Female",
      src: "https://files.chat.openai.com/file-0000000033106246997057188cfa5124"
    },
    {
      label: "Plus Size Male Model",
      src: "https://files.chat.openai.com/file-000000000058624691f56565d218f841"
    },
    {
      label: "Plus Size Female Model",
      src: "https://files.chat.openai.com/file-0000000088246246b7e845cb2f2a7c1e"
    }
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r p-4 space-y-4">
        <h2 className="text-lg font-bold">AI Modeling</h2>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">Home</Button>
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          <Button variant="ghost" className="w-full justify-start">Upload</Button>
          <Button variant="ghost" className="w-full justify-start">Generate</Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
            <div className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-gray-200 rounded-md">
              {user.plan} Plan
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">Generations Used</p>
            <Progress value={percentUsed} className="w-48" />
            <p className="text-sm mt-1">{user.generationsUsed} / {user.generationLimit}</p>
          </div>
        </div>

        <Tabs defaultValue="model" className="space-y-6">
          <TabsList>
            <TabsTrigger value="model">Model Selection</TabsTrigger>
            <TabsTrigger value="upload">Upload Clothing</TabsTrigger>
            <TabsTrigger value="generate">Generate Result</TabsTrigger>
          </TabsList>

          <TabsContent value="model">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Choose a Model</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {modelImages.map((model, i) => (
                    <div key={i} className="space-y-2 text-center">
                      <img src={model.src} alt={model.label} className="h-32 w-full object-cover rounded-xl" />
                      <p className="text-sm text-gray-700">{model.label}</p>
                    </div>
                  ))}
                </div>
                {user.plan === "Pro" && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Or generate a custom model (Pro only)</p>
                    <input 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      placeholder="e.g. Tall woman with afro and sunglasses"
                    />
                    <Button>Generate Custom Model</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Upload Clothing</h2>
                <Input type="file" accept="image/*" />
                <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-sm text-gray-500">Preview will appear here</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="generate">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Generate Image</h2>
                <Button>Generate with AI</Button>
                <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-sm text-gray-500">Result will appear here</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
