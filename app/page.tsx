import Button from "@/components/Button/Button";
import Form from "@/components/Form/Form";
import TodoList from "@/components/TodoList/TodoList";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 container mx-auto">
      <div className="flex justify-between w-full items-center gap-2">
        <h2 className="uppercase font-bold ">to do list </h2>
        <Dialog>
          <DialogTrigger><Button /></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>create a new task</DialogTitle>
            </DialogHeader>
            <Form type="create" value={null} />
          </DialogContent>
        </Dialog>
      </div>
      <TodoList />
    </main>
  );
}
