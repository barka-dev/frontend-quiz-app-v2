import ScoreDisplay from "@/app/components/scoreDisplay";
import Title from "@/app/components/title";

export default function Score(){
    return(
        <>
            <section>
                <Title title_part1="Quiz completed" title_part2="You scored..."/>
            </section>
            <article>
                <ScoreDisplay/>
            </article>        
        </>
    )
}